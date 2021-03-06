module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1380,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"}],"remarkPlugins":[null],"defaultLayouts":{},"lessBabel":false,"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/bertswinnen/Documents/projects/tryout/eventing-tester-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[],"preset":{"initialColorModeName":"light","colors":{"text":"#232129","background":"#fff","primary":"#663399","secondary":"#1B1F23","muted":"hsla(0, 0%, 0%, 0.2)","highlight":"rgba(255, 229, 100, 0.2)","heading":"#232129","prism":{"background":"#011627","comment":"#809393","string":"#addb67","var":"#d6deeb","number":"#f78c6c","constant":"#82aaff","punctuation":"#c792ea","className":"#ffc98b","tag":"#ffa7c4","boolean":"#ff5874","property":"#80cbc4","namespace":"#b2ccd6","highlight":"hsla(207, 95%, 15%, 1)"},"modes":{"dark":{"text":"rgba(255, 255, 255, 0.86)","background":"#232129","primary":"#D9BAE8","secondary":"rgba(255, 255, 255, 0.86)","muted":"hsla(0, 0%, 100%, 0.2)","highlight":"#663399","heading":"#fff"}}},"fonts":{"body":"system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif","heading":"inherit","monospace":"Menlo, monospace"},"sizes":{"container":672},"styles":{"root":{"fontFamily":"body"},"pre":{"variant":"prism","fontFamily":"monospace","tabSize":4,"hyphens":"none","marginBottom":2,"color":"white","bg":"prism.background","overflow":"auto","borderRadius":10,"p":3,".highlight":{"background":"hsla(0, 0%, 40%, .5)"}},"code":{"fontFamily":"monospace","fontSize":"inherit"},"inlineCode":{"borderRadius":"0.3em","color":"secondary","bg":"highlight","paddingTop":"0.15em","paddingBottom":"0.05em","paddingX":"0.2em"},"a":{"color":"primary"},"hr":{"borderColor":"muted"},"p":{"code":{"fontSize":"inherit"}},"li":{"code":{"fontSize":"inherit"}},"blockquote":{"color":"inherit","borderLeftColor":"inherit","opacity":0.8,"&.translation":{"fontSize":"1em"}}},"prism":{".attr-name":{"fontStyle":"italic"},".comment":{"color":"prism.comment"},".attr-name, .string, .url":{"color":"prism.string"},".variable":{"color":"prism.var"},".number":{"color":"prism.number"},".builtin, .char, .constant, .function":{"color":"prism.constant"},".punctuation, .selector, .doctype":{"color":"prism.punctuation"},".class-name":{"color":"prism.className"},".tag, .operator, .keyword":{"color":"prism.tag"},".boolean":{"color":"prism.boolean"},".property":{"color":"prism.property"},".namespace":{"color":"prism.namespace"}}}},
    },{
      plugin: require('../node_modules/gatsby-theme-blog/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
