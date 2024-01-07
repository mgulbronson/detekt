"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[6640],{9386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var s=n(5893),i=n(1151);function r(e){const t={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Usage: detekt [options]\n  Options:\n    --all-rules\n      Activates all available (even unstable) rules.\n      Default: false\n    --auto-correct, -ac\n      Allow rules to auto correct code if they support it. The default rule \n      sets do NOT support auto correcting and won't change any line in the \n      users code base. However custom rules can be written to support auto \n      correcting. The additional 'formatting' rule set, added with \n      '--plugins', does support it and needs this flag.\n      Default: false\n    --base-path, -bp\n      Specifies a directory as the base path.Currently it impacts all file \n      paths in the formatted reports. File paths in console output and txt \n      report are not affected and remain as absolute paths.\n      Default: /home/runner/work/detekt/detekt/detekt-cli\n    --baseline, -b\n      If a baseline xml file is passed in, only new code smells not in the \n      baseline are printed in the console.\n    --build-upon-default-config\n      Preconfigures detekt with a bunch of rules and some opinionated defaults \n      for you. Allows additional provided configurations to override the \n      defaults. \n      Default: false\n    --classpath, -cp\n      EXPERIMENTAL: Paths where to find user class files and depending jar \n      files. Used for type resolution.\n    --config, -c\n      Path to the config file (path/to/config.yml). Multiple configuration \n      files can be specified with ',' or ';' as separator.\n    --config-resource, -cr\n      Path to the config resource on detekt's classpath (path/to/config.yml).\n    --create-baseline, -cb\n      Treats current analysis findings as a smell baseline for future detekt \n      runs. \n      Default: false\n    --debug\n      Prints extra information about configurations and extensions.\n      Default: false\n    --disable-default-rulesets, -dd\n      Disables default rule sets.\n      Default: false\n    --excludes, -ex\n      Globbing patterns describing paths to exclude from the analysis.\n    --fail-on-severity\n      Specifies the minimum severity that causes the build to fail. When the \n      value is set to 'Never' detekt will not fail regardless of the number of \n      issues and their severities.\n      Default: Error\n      Possible Values: [Error, Warning, Info, Never]\n    --generate-config, -gc\n      Export default config. Path can be specified with --config option \n      (default path: default-detekt-config.yml)\n      Default: false\n    --help, -h\n      Shows the usage.\n    --includes, -in\n      Globbing patterns describing paths to include in the analysis. Useful in \n      combination with 'excludes' patterns.\n    --input, -i\n      Input paths to analyze. Multiple paths are separated by comma. If not \n      specified the current working directory is used.\n    --jdk-home\n      EXPERIMENTAL: Use a custom JDK home directory to include into the \n      classpath \n    --jvm-target\n      EXPERIMENTAL: Target version of the generated JVM bytecode that was \n      generated during compilation and is now being used for type resolution\n      Default: 1.8\n      Possible Values: [1.6, 1.8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]\n    --language-version\n      EXPERIMENTAL: Compatibility mode for Kotlin language version X.Y, \n      reports errors for all language features that came out later\n      Possible Values: [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1]\n    --parallel\n      Enables parallel compilation and analysis of source files. Do some \n      benchmarks first before enabling this flag. Heuristics show performance \n      benefits starting from 2000 lines of Kotlin code.\n      Default: false\n    --plugins, -p\n      Extra paths to plugin jars separated by ',' or ';'.\n    --report, -r\n      Generates a report for given 'report-id' and stores it on given 'path'. \n      Entry should consist of: [report-id:path]. Available 'report-id' values: \n      'txt', 'xml', 'html', 'md', 'sarif'. These can also be used in \n      combination with each other e.g. '-r txt:reports/detekt.txt -r \n      xml:reports/detekt.xml' \n    --version\n      Prints the detekt CLI version.\n      Default: false\n\n"})})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}function o(e){const t={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Usage: java -jar detekt-generator-1.23.3-all.jar [options]\n  Options:\n    --generate-custom-rule-config, -gcrc\n      Generate custom rules configuration files. The files will be\n      placed under 'resources' folder of each rule respectively\n      (e.g. 'custom-rule/src/main/resources/config/config.yml').\n    --input, -i\n      Input paths to rules to analyze. Multiple paths are separated by comma.\n"})})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}const d={title:"Run detekt using Command Line Interface",keywords:["cli"],sidebar:null,permalink:"cli.html",folder:"gettingstarted",summary:null,sidebar_position:1},c=void 0,h={id:"gettingstarted/cli",title:"Run detekt using Command Line Interface",description:"Install the cli",source:"@site/docs/gettingstarted/cli.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/cli",permalink:"/docs/next/gettingstarted/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/gettingstarted/cli.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Run detekt using Command Line Interface",keywords:["cli"],sidebar:null,permalink:"cli.html",folder:"gettingstarted",summary:null,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Compatibility Table",permalink:"/docs/next/introduction/compatibility"},next:{title:"Run detekt using the Detekt Gradle Plugin",permalink:"/docs/next/gettingstarted/gradle"}},u={},f=[{value:"Install the cli",id:"install-the-cli",level:2},{value:"MacOS, with Homebrew:",id:"macos-with-homebrew",level:3},{value:"Windows, with Scoop:",id:"windows-with-scoop",level:3},{value:"Unix-like OS, with SDKMAN!:",id:"unix-like-os-with-sdkman",level:3},{value:"Any OS:",id:"any-os",level:3},{value:"NixOS:",id:"nixos",level:3},{value:"Use the cli",id:"use-the-cli",level:2},{value:"Use the cli to generate configuration for custom rules",id:"use-the-cli-to-generate-configuration-for-custom-rules",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"install-the-cli",children:"Install the cli"}),"\n",(0,s.jsx)(t.p,{children:"There are different ways to install the Command Line Interface (CLI):"}),"\n",(0,s.jsxs)(t.h3,{id:"macos-with-homebrew",children:["MacOS, with ",(0,s.jsx)(t.a,{href:"https://brew.sh/",children:"Homebrew"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"brew install detekt\ndetekt [options]\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"windows-with-scoop",children:["Windows, with ",(0,s.jsx)(t.a,{href:"https://scoop.sh/",children:"Scoop"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-powershell",children:"scoop install detekt\ndetekt [options]\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"unix-like-os-with-sdkman",children:["Unix-like OS, with ",(0,s.jsx)(t.a,{href:"https://sdkman.io/",children:"SDKMAN!"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"sdk install detekt\n"})}),"\n",(0,s.jsx)(t.h3,{id:"any-os",children:"Any OS:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"curl -sSLO https://github.com/detekt/detekt/releases/download/v1.23.3/detekt-cli-1.23.3.zip\nunzip detekt-cli-1.23.3.zip\n./detekt-cli-1.23.3/bin/detekt-cli --help\n"})}),"\n",(0,s.jsx)(t.h3,{id:"nixos",children:"NixOS:"}),"\n",(0,s.jsxs)(t.p,{children:["As a prerequisite, you have to add the unstable channel via ",(0,s.jsx)(t.code,{children:"nix-channel"})," and then execute the following command."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"nix-shell -I nixpkgs=channel:nixpkgs-unstable -p detekt\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-the-cli",children:"Use the cli"}),"\n",(0,s.jsx)(t.p,{children:"detekt will exit with one of the following exit codes:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Exit code"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"detekt"})," ran normally and no issues",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," were found."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"An unexpected error occurred."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2"}),(0,s.jsxs)(t.td,{children:["At least one issue",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," was found."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"Invalid detekt configuration file detected."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The following parameters are shown when ",(0,s.jsx)(t.code,{children:"--help"})," is entered."]}),"\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(t.h2,{id:"use-the-cli-to-generate-configuration-for-custom-rules",children:"Use the cli to generate configuration for custom rules"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"java -jar detekt-generator-1.23.3-all.jar -gcrc -i /path/to/rule1, /path/to/rule2\n"})}),"\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:["All found issues that have a severity of or above the ",(0,s.jsx)(t.code,{children:"--fail-on-severity"})," argument are considered. ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-1-2","data-footnote-backref":"","aria-label":"Back to reference 1-2",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"2"})]})]}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);