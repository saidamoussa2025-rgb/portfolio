package TP;

public class Banque {
	public String nom;
	public CompteBancaire [] comptes;
	public int nbActuels;
	
	public Banque(String nom,int capacité_maximale){
		this.nom=nom;
		this.comptes=new CompteBancaire[capacité_maximale];
		this.nbActuels = 0;
	}
	public void  ajouterCompte(CompteBancaire c) {
		if (nbActuels < comptes.length) {
            comptes[nbActuels] = c;
            nbActuels++;
        } else {
            System.out.println("Banque pleine !");
        }
	}
	public void  afficherTous() {
		for(int i=0;i<nbActuels;i++) {
			comptes[i].afficher();
		}
	}
	

}
