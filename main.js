window.Event = new Vue();


Vue.component('coupon', {
    template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
            
    `,

    methods: {
        onCouponApplied() {
            Event.$emit('applied');
        },
    },
   
});



new Vue ({
    el: '#root', 

    created() {
        Event.$on('applied', () => {
            this.couponApplied = true;
        });
    },

    data() {
        return {
            couponApplied: false,
        }
    },

});