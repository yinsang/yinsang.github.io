<!doctype html>

{% set html_class = 'theme-next ' + theme.scheme %}
{% if theme.use_motion %}
  {% set html_class = html_class + ' use-motion' %}
{% endif %}

<html class="{{ html_class | lower }}" lang="{{ config.language }}">
<head>
  {% include '_partials/head.swig' %}
  <title>{% block title %}{% endblock %}</title>

  <link rel="stylesheet" href="/css/default.css">
</head>

<body itemscope itemtype="http://schema.org/WebPage" lang="{{ page.lang || page.language || config.language }}">
  {% include '_third-party/analytics/index.swig' %}

  {% set container_class = "container " %}
  {% if theme.sidebar.position %}
    {% set container_class = container_class + 'sidebar-position-' + theme.sidebar.position %}
  {% endif %}

  <div class="{{ container_class }} {% block page_class %}{% endblock %} ">
    <div class="headband"></div>

    <header id="header" class="header" itemscope itemtype="http://schema.org/WPHeader">
      <div class="header-inner"> {%- include '_partials/header.swig' %} </div>
    </header>

    <main id="main" class="main">
      <div class="main-inner">
        <div class="content-wrap">
          <div id="content" class="content">
            {% block content %}{% endblock %}
          </div>
          {% include '_third-party/duoshuo-hot-articles.swig' %}
          {% include '_partials/comments.swig' %}
        </div>
        {% if theme.sidebar.display !== 'remove' %}
          {% block sidebar %}{% endblock %}
        {% endif %}
      </div>
    </main>

    <footer id="footer" class="footer">
      <div class="footer-inner">
        {% include '_partials/footer.swig' %}
        {% include '_third-party/analytics/busuanzi-counter.swig' %}
        {% block footer %}{% endblock %}
      </div>
    </footer>

    {% if not theme.sidebar.b2t %}
      <div class="back-to-top">
        <i class="fa fa-arrow-up"></i>
        {% if theme.sidebar.scrollpercent %}
          <span id="scrollpercent"><span>0</span>%</span>
        {% endif %}
      </div>
    {% endif %}

  </div>

  {% include '_scripts/vendors.swig' %}
  {% include '_scripts/commons.swig' %}

  {% set scheme_script = '_scripts/schemes/' + theme.scheme | lower + '.swig' %}
  {% include scheme_script %}

  {% block script_extra %}{% endblock %}

  {% include '_scripts/boostrap.swig' %}

  {% include '_third-party/comments/index.swig' %}
  {% include '_third-party/search/index.swig' %}
  {% include '_third-party/analytics/lean-analytics.swig' %}
  {% include '_third-party/seo/baidu-push.swig' %}
  {% include '_third-party/mathjax.swig' %}
  {% include '_third-party/exturl.swig' %}
  <div id="container"></div>
    <script src="/js/src/gitment.browser.js"></script>
    <script>
        var gitment = new Gitment({
          id: location.href, // 可选。默认为 location.href
          owner: 'yinsang',
          repo: 'yinsang.github.io',
          oauth: {
            client_id: 'f1741e29d5e2de45b5d5',
            client_secret: '94a74d25d54bbff31fa9889f131c7c7c1e56ac4f',
          },
        })
        gitment.render('container')
    </script>
  <script src="/js/src/user-title.js"></script>

  <script src="/js/src/user-love.js"></script>
  <script src="/js/src/user-rem-build.js"></script>
  <script>
      if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
        window.mobileUtil.fixScreen()
      }else{
          var userNest = document.createElement("script")
          userNest.src = '/js/src/user-nest.js'
          document.body.appendChild(userNest)
      }
  </script>
</body>
</html>
