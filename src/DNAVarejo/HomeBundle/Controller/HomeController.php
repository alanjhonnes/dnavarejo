<?php

namespace DNAVarejo\HomeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class HomeController extends Controller
{
    /**
     * @Route("/")
     * @Template("DNAVarejoHomeBundle:Home:index.html.twig")
     */
    public function indexAction()
    {
        return array('name' => "Alan");
    }
}
