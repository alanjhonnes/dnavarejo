<?php

namespace DNAVarejo\AdminBundle\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

/**
 * Description of ClientAdmin
 *
 * @author user
 */
class ClientAdmin extends Admin {
    
    // Fields to be shown on create/edit forms
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('name', 'text', array('label' => 'Nome do Cliente'))
            ->add('logo', 'text', array('label' => 'Logotipo'))
            ->add('about', 'text', array('label' => 'Sobre'))
            ->add('description', 'text', array('label' => 'Descrição'))
            ->add('results', 'text', array('label' => 'Resultados'))
            ->add('image1', 'text', array('label' => 'Imagem 1'))
            ->add('image2', 'text', array('label' => 'Imagem 2'))
        ;
    }

    // Fields to be shown on filter forms
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name')
            ->add('about')
        ;
    }

    // Fields to be shown on lists
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name')
            ->add('logo')
            ->add('about')
            ->add('description')
        ;
    }
}
