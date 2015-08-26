System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },
  separateCSS: true,

  map: {
    "angular": "github:angular/bower-angular@1.4.4",
    "angular-material": "github:angular/bower-material@0.10.1",
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@1.1.1",
    "ts": "github:frankwallis/plugin-typescript@2.0.7",
    "typescript": "npm:typescript@1.6.0-dev.20150825",
    "github:angular/bower-angular-animate@1.4.4": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:angular/bower-angular-aria@1.4.4": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:angular/bower-material@0.10.1": {
      "angular": "github:angular/bower-angular@1.4.4",
      "angular-animate": "github:angular/bower-angular-animate@1.4.4",
      "angular-aria": "github:angular/bower-angular-aria@1.4.4",
      "css": "github:systemjs/plugin-css@0.1.14"
    },
    "github:frankwallis/plugin-typescript@2.0.7": {
      "typescript": "npm:typescript@1.6.0-dev.20150825"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:typescript@1.6.0-dev.20150825": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    }
  }
});
