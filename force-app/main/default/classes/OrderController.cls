public with sharing class OrderController {

    @AuraEnabled(Cacheable=true)
    public static Order_Item__c[] getOrderItems(Id orderId) {
        /*return [SELECT Id,Name, Qty_S__c, Qty_M__c, Qty_L__c, Price__c,
            Product__r.Name, Product__r.MSRP__c, Product__r.Picture_URL__c
            FROM Order_Item__c WHERE Order__c = :orderId];
        */
        List<Order_Item__c> listOrderItem = new List<Order_Item__c>();
        List<Order_Item__c> listOrderItemNew = new List<Order_Item__c>();
        listOrderItem = [SELECT Id,Name, Qty_S__c, Qty_M__c, Qty_L__c, Price__c,
         Product__r.Name, Product__r.MSRP__c, Product__r.Picture_URL__c
         FROM Order_Item__c WHERE Order__c = :orderId];

        for(Order_Item__c orderItem:listOrderItem){
            orderItem.Qty_S__c = orderItem.Qty_S__c*5;
            listOrderItemNew.add(orderItem);
        }

        return listOrderItemNew;


    }
}
