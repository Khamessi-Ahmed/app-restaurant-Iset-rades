package com.projet.app.controllers;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.projet.app.services.UserServiceImplients;

@RestController
public class UserController {
	      @Autowired
	      UserServiceImplients userservice;
	      @GetMapping("/Users")
	      @ResponseBody
	      public List<User>getAllUsers(){
	    	  return null;}
	    	  
	      
	      
	      @PostMapping("/AjouterUser")
	      @ResponseBody
	      public User AjouterUser(@RequestBody User u) {
			return userservice.ajouterUser(u);
	    	  
	      }
	      @DeleteMapping("deleteUser/{id}")
	      @ResponseBody
	      public void deleteUser(@PathVariable("id") Long idUser) {
	    	  userservice.DeleteUser(idUser);
	      }
	      
	      

}
