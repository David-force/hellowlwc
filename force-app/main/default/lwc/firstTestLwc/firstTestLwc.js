import { LightningElement,api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import BOOK_OBJECT from '@salesforce/schema/Book__c';

export default class FirstTestLwc extends LightningElement {
    @api book;
     /** View Details Handler to navigates to the record page */
     handleViewDetailsClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.book.Id,
                objectApiName: BOOK_OBJECT.objectApiName,
                actionName: 'view'
            }
        });
    }
}
