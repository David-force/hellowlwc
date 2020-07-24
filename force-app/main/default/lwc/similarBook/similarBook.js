import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getBooks from '@salesforce/apex/ProductController.getBooks';
import PRODUCT_FAMILY_FIELD from '@salesforce/schema/Product__c.Product_Family__c';

const fields = [PRODUCT_FAMILY_FIELD];

export default class SimilarBook extends LightningElement {
    @api recordId;
    @api searchBarIsVisible = false;
    @track books=[];

     /** JSON.stringified version of filters to pass to apex */
     filters = '{}';

    // Track changes to the Product_Family__c field that could be made in other components.
    // If Product_Family__c is updated in another component, getSimilarProducts
    // is automatically re-invoked with the new this.familyId parameter

    connectedCallback(){

    }

    @wire(getBooks, {
        filters: '$filters'
    })
    books;

    get errors() {
        const errors = [this.books.error, this.similarBook.error].filter(
            error => error
        );
        return errors.length ? errors : undefined;
    }

    handleSearchKeyChange(event) {
        const searchKey = event.target.value.toLowerCase();
        this.handleFilterChange({ searchKey });
    }

    handleFilterChange(filters) {
        this.filters = JSON.stringify(filters);
    }

}
