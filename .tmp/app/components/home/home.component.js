"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var contact_service_1 = require('./contact.service');
var HomeComponent = (function () {
    function HomeComponent(_contactService) {
        this._contactService = _contactService;
        this.message = { name: '', email: '', message: '' };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        this._contactService.postEmail(this.message).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleResponse(error); });
    };
    HomeComponent.prototype.handleResponse = function (response) {
        // console.log(`msg is: {response.status}`);
        if (response.status == 'success') {
            this.message = { name: '', email: '', message: '' };
            alert('Danke für deine Nachricht');
        }
        if (response.status == 'error') {
            alert('Leider konnten wir deine Nachricht nicht versenden. Probier es nochmals oder sende die email direkt. Danke');
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'content',
            templateUrl: './app/components/home/home.tpl.html',
            providers: [http_1.HTTP_PROVIDERS, contact_service_1.ContactService]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsZ0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFVcEQ7SUFDSSx1QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRzdDLFlBQU8sR0FBVSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFISCxDQUFDO0lBQ3pELGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBSWQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDcEQsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUE3QixDQUE2QixFQUN6QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQ3BDLENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLFFBQVE7UUFDckIsNENBQTRDO1FBRTVDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQztZQUNsRCxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBRyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQzVCLEtBQUssQ0FBQyw0R0FBNEcsQ0FBQyxDQUFDO1FBQ3RILENBQUM7SUFDSCxDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbkQsU0FBUyxFQUFFLENBQUMscUJBQWMsRUFBRSxnQ0FBYyxDQUFDO1NBQzNDLENBQUM7O3FCQUFBO0lBMkJGLG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxxQkFBYSxnQkF5QnpCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSAgICBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XG5pbXBvcnQge0VtYWlsfSAgICAgICAgICAgICBmcm9tICcuL2ludGVyZmFjZXMvRW1haWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLnRwbC5odG1sJyxcbiBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgQ29udGFjdFNlcnZpY2VdXG59KVxuIFxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlIDogQ29udGFjdFNlcnZpY2UpIHsgfVxuICAgIG5nT25Jbml0KCkgeyB9XG4gXG4gICAgcHVibGljIG1lc3NhZ2U6IEVtYWlsID0ge25hbWU6ICcnLCBlbWFpbDogJycsIG1lc3NhZ2U6ICcnfTtcbiBcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLnBvc3RFbWFpbCh0aGlzLm1lc3NhZ2UpLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5oYW5kbGVSZXNwb25zZShyZXNwb25zZSksXG4gICAgICAgIGVycm9yID0+IHRoaXMuaGFuZGxlUmVzcG9uc2UoZXJyb3IpXG4gICAgICApO1xuICAgIH1cbiBcbiAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSl7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgbXNnIGlzOiB7cmVzcG9uc2Uuc3RhdHVzfWApO1xuIFxuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09J3N1Y2Nlc3MnKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0ge25hbWU6ICcnLCBlbWFpbDogJycsIG1lc3NhZ2U6ICcnfTtcbiAgICAgICAgYWxlcnQoJ0RhbmtlIGbDvHIgZGVpbmUgTmFjaHJpY2h0Jyk7XG4gICAgICB9XG4gXG4gICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0nZXJyb3InKXtcbiAgICAgICAgYWxlcnQoJ0xlaWRlciBrb25udGVuIHdpciBkZWluZSBOYWNocmljaHQgbmljaHQgdmVyc2VuZGVuLiBQcm9iaWVyIGVzIG5vY2htYWxzIG9kZXIgc2VuZGUgZGllIGVtYWlsIGRpcmVrdC4gRGFua2UnKTtcbiAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
