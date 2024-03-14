package com.projet.app.model;

import java.util.ArrayList;
import java.util.List;

public class Administrateur extends Users {

    private static final long serialVersionUID = 1L;
    private List<Users> usersList = new ArrayList<>();

   

    public Administrateur(long id, String nom, String prenom, String email, String motdepasse, String role) {
        super(id, nom, prenom, email, motdepasse, role);
        this.role="Administrateur";
    }

    public List<Users> getUsersList() {
        return usersList;
    }

    public void setUsersList(List<Users> usersList) {
        this.usersList = usersList;
    }

    public void addUsers(Users user) {
        usersList.add(user);
    }

    public Users editUsers(Users newUser) {
        for (Users user : usersList) {
            if (user.getId() == newUser.getId()) {
                user.setNom(newUser.getNom());
                user.setPrenom(newUser.getPrenom());
                user.setEmail(newUser.getEmail());
                user.setMotdepasse(newUser.getMotdepasse());
                user.setRole(newUser.getRole());
               
                return user;
            }
        }
        return null; 
    }

    public void deleteUser(long id) {
        for (Users user : usersList) {
            if (user.getId() == id) {
                usersList.remove(user); 
                break; 
            }
        }
    }
}
