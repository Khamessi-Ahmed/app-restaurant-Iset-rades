package com.projet.app.services;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projet.app.repository.UserRepository;

@Service
public class UserServices implements UserServiceImplients {
@Autowired

	UserRepository repUser;
	public User ajouterUser(User u) {
		repUser.save(u);
		return null;
	}

	@Override
	public void DeleteUser(User u) {
		// TODO Auto-generated method stub
		
	}

}
