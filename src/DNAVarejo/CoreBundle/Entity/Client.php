<?php

namespace DNAVarejo\CoreBundle\Entity;

use Doctrine\ORM\Mapping AS ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @author Alan Jhonnes <aj@alanjhonnes.com>
 * @ORM\Entity(repositoryClass="DNAVarejo\CoreBundle\Entity\ClientRepository")
 */
class Client {
    
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;
    
    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     */
    protected $name;
    
    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     * @var string
     */
    protected $logo;
    
    /**
     * @ORM\Column(type="string", length=400)
     * @var string
     */
    protected $about;
    
    /**
     * @ORM\Column(type="string", length=400)
     * @var string
     */
    protected $description;
    
    
    /**
     * @ORM\Column(type="string", length=400)
     * @var string
     */
    protected $results;
    
    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    protected $image1;
    
    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    protected $image2;
    

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Client
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set logo
     *
     * @param string $logo
     * @return Client
     */
    public function setLogo($logo)
    {
        $this->logo = $logo;

        return $this;
    }

    /**
     * Get logo
     *
     * @return string 
     */
    public function getLogo()
    {
        return $this->logo;
    }

    /**
     * Set about
     *
     * @param string $about
     * @return Client
     */
    public function setAbout($about)
    {
        $this->about = $about;

        return $this;
    }

    /**
     * Get about
     *
     * @return string 
     */
    public function getAbout()
    {
        return $this->about;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Client
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set results
     *
     * @param string $results
     * @return Client
     */
    public function setResults($results)
    {
        $this->results = $results;

        return $this;
    }

    /**
     * Get results
     *
     * @return string 
     */
    public function getResults()
    {
        return $this->results;
    }

    /**
     * Set image1
     *
     * @param string $image1
     * @return Client
     */
    public function setImage1($image1)
    {
        $this->image1 = $image1;

        return $this;
    }

    /**
     * Get image1
     *
     * @return string 
     */
    public function getImage1()
    {
        return $this->image1;
    }

    /**
     * Set image2
     *
     * @param string $image2
     * @return Client
     */
    public function setImage2($image2)
    {
        $this->image2 = $image2;

        return $this;
    }

    /**
     * Get image2
     *
     * @return string 
     */
    public function getImage2()
    {
        return $this->image2;
    }
}
