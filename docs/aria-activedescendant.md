# aria-activedescendant Rule

when you use `aria-activedescendant` and that target element have `aria-label` setting

that element's all children need follow below rules:

1. all children should be non speak role
2. not have tabindex is best, if need use role: `separator, log` https://ithelp.ithome.com.tw/articles/10219158

https://stackblitz.com/edit/web-platform-nvnzud?file=index.html
