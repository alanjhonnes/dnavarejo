<?php

/* DNAVarejoHomeBundle:Home:index.html.twig */
class __TwigTemplate_b93c8e8f9c05baa790582f1e26bfcd895395b706729d4beead7498759f501f3a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <title>";
        // line 4
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        ";
        // line 5
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 9
        echo "        <link rel=\"shortcut icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>
          <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>
        <![endif]-->
        <script src=\"";
        // line 16
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("js/modernizr-2.6.2.min.js"), "html", null, true);
        echo "\"></script>
    </head>
    <body>
        <div class=\"container\">
            <div class=\"row\">
                <nav id=\"ribbon-menu\">
                    <div id=\"ribbon-menu-stripe\">
                        <div id=\"logo\">
                            <img src=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("images/logo.png"), "html", null, true);
        echo "\" alt=\"DNA Varejo\"/>
                        </div>
                        <a href='#'><span>QUEM SOMOS</span></a>
                        <a href='#'><span>O QUE FAZEMOS</span></a>
                        <a href='#'><span>SERVIÇOS</span></a>
                        <a href='#'><span>CLIENTES</span></a>
                        <a href='#'><span>CONTATO</span></a>
                    </div>
                </nav>
            </div>
        </div>
        ";
        // line 35
        $this->displayBlock('javascripts', $context, $blocks);
        // line 39
        echo "    </body>
</html>";
    }

    // line 4
    public function block_title($context, array $blocks = array())
    {
        echo "DNA Varejo";
    }

    // line 5
    public function block_stylesheets($context, array $blocks = array())
    {
        // line 6
        echo "        <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"/>
        <link href=\"css/main.css\" rel=\"stylesheet\"/>
        ";
    }

    // line 35
    public function block_javascripts($context, array $blocks = array())
    {
        // line 36
        echo "        <script src=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("js/jquery-1.11.0.min.js"), "html", null, true);
        echo "\"></script>
        <script src=\"";
        // line 37
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("js/main.js"), "html", null, true);
        echo "\"></script>
        ";
    }

    public function getTemplateName()
    {
        return "DNAVarejoHomeBundle:Home:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  99 => 37,  94 => 36,  91 => 35,  85 => 6,  82 => 5,  76 => 4,  71 => 39,  69 => 35,  55 => 24,  44 => 16,  33 => 9,  31 => 5,  27 => 4,  22 => 1,);
    }
}
