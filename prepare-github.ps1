# Script para preparar archivos para GitHub
Write-Host "Preparando archivos para GitHub..." -ForegroundColor Green

# Crear carpeta temporal para los archivos a publicar
$tempFolder = ".\github-files"
if (Test-Path $tempFolder) {
    Remove-Item -Path $tempFolder -Recurse -Force
}
New-Item -Path $tempFolder -ItemType Directory | Out-Null

# Carpetas y archivos a excluir
$excludeFolders = @(
    ".next",
    "node_modules",
    "out",
    ".vscode",
    "backups"
)

# Copiar archivos y carpetas, excluyendo los no deseados
Write-Host "Copiando archivos relevantes..." -ForegroundColor Yellow
Get-ChildItem -Path "." -Exclude $excludeFolders | ForEach-Object {
    if ($_.Name -notmatch "\.zip$" -and $_.Name -ne "github-files" -and $_.Name -notmatch "fix-.*\.json$") {
        if ($_.PSIsContainer) {
            Copy-Item -Path $_.FullName -Destination "$tempFolder\$($_.Name)" -Recurse
        } else {
            Copy-Item -Path $_.FullName -Destination "$tempFolder\$($_.Name)"
        }
    }
}

# Crear archivo zip
$zipFileName = "uniform-blogs-github.zip"
Write-Host "Creando archivo zip $zipFileName..." -ForegroundColor Yellow
if (Test-Path $zipFileName) {
    Remove-Item -Path $zipFileName -Force
}

Add-Type -Assembly System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($tempFolder, $zipFileName)

# Limpiar carpeta temporal
Remove-Item -Path $tempFolder -Recurse -Force

Write-Host "¡Listo! El archivo $zipFileName contiene todos los archivos necesarios para subir a GitHub." -ForegroundColor Green
Write-Host "Instrucciones para subir manualmente a GitHub:" -ForegroundColor Cyan
Write-Host "1. Ve a https://github.com/skywaveads/uniform1" -ForegroundColor White
Write-Host "2. Inicia sesión con tus credenciales" -ForegroundColor White
Write-Host "3. Haz clic en 'Upload files' (botón 'Add file' y luego 'Upload files')" -ForegroundColor White
Write-Host "4. Arrastra el archivo zip o selecciónalo desde tu computadora" -ForegroundColor White
Write-Host "5. Descomprime el archivo zip y sube los archivos descomprimidos" -ForegroundColor White
Write-Host "6. Agrega un mensaje de commit como 'Initial commit' y haz clic en 'Commit changes'" -ForegroundColor White
Write-Host "" -ForegroundColor White
Write-Host "También puedes crear un archivo README.md para documentar el proyecto antes de subirlo." -ForegroundColor Yellow 