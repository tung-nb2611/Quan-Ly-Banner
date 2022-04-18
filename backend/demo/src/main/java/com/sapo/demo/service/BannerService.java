package com.sapo.demo.service;
import java.util.List;
import java.util.NoSuchElementException;

import com.sapo.demo.entity.BannerEntity;
import com.sapo.demo.repository.BannerRepositoty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class BannerService  {

    @Autowired
    private BannerRepositoty repository;

    public List<BannerEntity> listAllBanner(){
        return repository.findAll();
    }

    @Transactional
    public void save(BannerEntity bannerEntity){
        repository.save(bannerEntity);
    }

    public BannerEntity getById(Integer id){
        return repository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            repository.deleteById(id);
        }catch (NoSuchElementException e){

        }
    }

}
