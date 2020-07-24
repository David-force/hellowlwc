public with sharing class fristApexClass {
    public fristApexClass() {

    }

    @AuraEnabled(Cacheable=true)
    public static Product__c[] getSimilarProducts(Id productId, Id familyId) {
        return [SELECT Id, Name, MSRP__c, Description__c, Category__c, Level__c, Picture_URL__c, Material__c FROM Product__c WHERE Product_Family__c=:familyId AND Id!=:productId];
    }
}
