window.addEventListener('load', function () {


new Vue({
    el: '#app',
    props:['orderDetailsProp'],
    data: {
        errors: [],
        calorie: null,
        givenname: null,
        familyname: null,
        address:null,
        contactnumber:null,
        checkedRestrictions:[],
        add_otherRestrictions: [],
        otherRemarks:null
    },
    computed:{
        combinedName:function(){
            return this.givenname +' ' + this.familyname;
        }
    },
    methods:{
        checkForm: function (e) {
            if (this.calorie && this.givenname&&this.familyname && this.address &&this.contactnumber) {
                return true;
            }

            this.errors = [];

            if (!this.calorie) {
                this.errors.push('Calorie Required.');
            }
            if (!this.givenname) {
                this.errors.push('Given Name Required.');
            }
            if (!this.familyname) {
                this.errors.push('Family Name Required.');
            }
            if (!this.address) {
                this.errors.push('Address Required.');
            }
            if (!this.contactnumber) {
                this.errors.push('Contact Number Required.');
            }


            e.preventDefault();
        },

        otherRestriction: function (e) {
            this.add_otherRestrictions.push({ restrictionname: '' });
            e.preventDefault();
        }
    }
})

})