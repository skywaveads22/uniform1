import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'UniformSA - Premium Uniform Solutions in Saudi Arabia'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Fetch the font from Google Fonts without using import.meta
  const interSemiBold = fetch(
    'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: 'linear-gradient(to bottom, #ffffff, #f4f4f5)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              background: '#0061ff',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              marginRight: 12,
            }}
          >
            UniformSA
          </div>
          <div style={{ fontSize: 36, fontWeight: 'bold', color: '#18181b' }}>
            Uniform Solutions
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#18181b',
              margin: 0,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Premium Uniform Solutions in Saudi Arabia
          </h1>
          <p style={{ fontSize: 32, color: '#52525b', margin: 0, opacity: 0.9 }}>
            Excellence in quality, design, and cultural sensitivity
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '12px 20px',
              background: 'rgba(0, 97, 255, 0.1)',
              borderRadius: 50,
              fontSize: 20,
              marginRight: 12,
            }}
          >
            Aviation
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 20px',
              background: 'rgba(0, 97, 255, 0.1)',
              borderRadius: 50,
              fontSize: 20,
              marginRight: 12,
            }}
          >
            Healthcare
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 20px',
              background: 'rgba(0, 97, 255, 0.1)',
              borderRadius: 50,
              fontSize: 20,
              marginRight: 12,
            }}
          >
            Hospitality
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 20px',
              background: 'rgba(0, 97, 255, 0.1)',
              borderRadius: 50,
              fontSize: 20,
            }}
          >
            Education
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
} 