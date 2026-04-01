package TP;

public class Main {
	public static void main(String[]args) {
		Banque banque = new Banque("MarocBank", 1500);
		CompteBancaire c1=new CompteBancaire("saida",1000,500);
		CompteBancaire c2=new CompteBancaire("younes",2000,300);
		CompteBancaire c3=new CompteBancaire("aicha",1500,400);
		
		banque.ajouterCompte(c1);
		banque.ajouterCompte(c2);
		banque.ajouterCompte(c3);
		
		c1.deposer(500);
		c1.retirer(1000);
		c2.virementVers(c3,600);
		
		banque.afficherTous();
		
		System.out.println("Solde avec intérêts c2: " + c2.calculerSoldeAvecInterets());
		System.out.println("Solde avec bonus c2: "+ c2.calculerSoldeAvecInterets(0.015));
		
		System.out.println("Nombre total comptes: " + CompteBancaire.getNbComptes());
		System.out.println("Taux intérêt: " + CompteBancaire.getTauxInteretAnnuel());
	
 
	}
	
}
