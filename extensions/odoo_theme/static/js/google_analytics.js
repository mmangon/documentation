(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// VFE FIXME, the {{}} is jinja code, it cannot be moved in an independent js code :P
ga('create', '{{ google_analytics_key }}', 'auto');
ga('set', 'anonymizeIp', true);
ga('send','pageview');