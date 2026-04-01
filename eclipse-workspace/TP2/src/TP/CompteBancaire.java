package TP;

public class CompteBancaire {
	
	private int numero;
	private String titulaire;
	private double solde;
	private double decouvertAutorise;
	
	private static int nbComptes=0;
	private static double tauxInteret=0.02;
	
	public CompteBancaire() {
		numero=0;
		titulaire="Inconnue";
		solde=0.0;
		decouvertAutorise=0.0;
		nbComptes++;
		
	}
	
	public CompteBancaire(String nom,double soldeInitial,double decovert_autorisé){
		nbComptes++;
		numero=nbComptes;
		titulaire=nom;
		solde=soldeInitial;
		decouvertAutorise=decovert_autorisé;
	}
	public String getTitulaire() {
		return titulaire;
	}
	public void setTitulaire(String titulaire) {
		if (titulaire != null && !titulaire.isEmpty()) {
			this.titulaire=titulaire;
		}
		
	}
	public double getDecouvert() {
		return decouvertAutorise;
	}
	public void setDecouvert(double decouvertAutorise ) {
		if(decouvertAutorise>=0) {
			this.decouvertAutorise = decouvertAutorise;
		}
		
	}
	public void afficher() {
		System.out.println("Compte N°: " + numero);
        System.out.println("Titulaire: " + titulaire);
        System.out.println("Solde: " + solde);
        System.out.println("Découvert autorisé: " + decouvertAutorise);
	}
	public void deposer(double montant) {
		if(montant>0) {
			solde+=montant;
		}else {
			System.out.println( "Montant de dépôt invalide.");
		}
	}
	public void retirer(double montant) {
		if(montant>0 && montant<=solde + decouvertAutorise) {
			solde-=montant;
		}else {
			System.out.println( "Retrait refusé." );
		}
	}
	public void virementVers(CompteBancaire autre, double montant) {
		if(montant>0 && solde + decouvertAutorise >= montant ) {
			this.retirer(montant);
            autre.deposer(montant);
		}else {
			System.out.println("Virement impossible : montant ou solde insuffisant.");
		}
	}
	public double calculerSoldeAvecInterets() {
		return solde + (solde * tauxInteret);
	}
	public double calculerSoldeAvecInterets(double bonus) {
		return solde + (solde * (tauxInteret+ bonus));
	}
	
	 public static int getNbComptes() {
	        return nbComptes;
	    }

	    public static double getTauxInteretAnnuel() {
	        return tauxInteret;
	    }

	    public static void setTauxInteretAnnuel(double taux) {
	        tauxInteret= taux;
	    }
}
