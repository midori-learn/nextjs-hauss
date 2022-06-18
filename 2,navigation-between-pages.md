- navigate between pages with next/link
- navigate to a page programmatically using router.push()
- how prefetching works

** link
ko reload ma chi them thong tin
- href
- pass href
- scroll: click to scroll 
- replace: can't back href
- passhref custom component
  client side routing

router.push()

router.push({
    pathname: '',
    query: {
        ...
    },

})

prefetch()
user click link then: lay truoc thong tin ve, ko can doi khi chuyen trang

only enable in production -> tuc la yarn build and yarn start, when yarn dev thi khong hoat dong

if slow network it also disable and it just enable when this link in view port 