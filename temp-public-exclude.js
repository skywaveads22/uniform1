
    // Patch to disable webpack from processing files in public directory
    const originalRequire = Module.prototype.require;
    Module.prototype.require = function(path) {
      if (path.includes('/public/') || path.includes('\\public\\')) {
        throw new Error('Public directory access disabled');
      }
      return originalRequire.apply(this, arguments);
    };
  