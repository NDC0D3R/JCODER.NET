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
var ContactComponent = (function () {
    function ContactComponent(_contactService) {
        this._contactService = _contactService;
        this.message = { name: '', email: '', message: '' };
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this._contactService.postEmail(this.message).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleResponse(error); });
    };
    ContactComponent.prototype.handleResponse = function (response) {
        console.log("msg is: {response.status}");
        if (response.status == 'success') {
            this.message = { name: '', email: '', message: '' };
            alert('Danke für deine Nachricht');
        }
        if (response.status == 'error') {
            alert('Leider konnten wir Ihre Nachricht nicht versenden. Probier Sie es nochmals oder rufen Sie an. Danke');
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/contact/contact.component.html',
            styleUrls: ['app/contact/contact.component.css', 'app/common.css'],
            providers: [http_1.HTTP_PROVIDERS, contact_service_1.ContactService]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsZ0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFTcEQ7SUFDSSwwQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRzdDLFlBQU8sR0FBVSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFISCxDQUFDO0lBQ3pELG1DQUFRLEdBQVIsY0FBYSxDQUFDO0lBSWQsbUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDcEQsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUE3QixDQUE2QixFQUN6QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQ3BDLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLFFBQVE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRTFDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQztZQUNsRCxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBRyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDO1FBQy9HLENBQUM7SUFDSCxDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsZ0JBQWdCLENBQUM7WUFDbEUsU0FBUyxFQUFFLENBQUMscUJBQWMsRUFBRSxnQ0FBYyxDQUFDO1NBQzlDLENBQUM7O3dCQUFBO0lBMkJGLHVCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSx3QkFBZ0IsbUJBeUI1QixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9ICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gICAgZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtFbWFpbH0gICAgICAgICAgICAgZnJvbSAnLi9pbnRlcmZhY2VzL0VtYWlsJztcbiBcbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcycsICdhcHAvY29tbW9uLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBDb250YWN0U2VydmljZV1cbn0pXG4gXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2UgOiBDb250YWN0U2VydmljZSkgeyB9XG4gICAgbmdPbkluaXQoKSB7IH1cbiBcbiAgICBwdWJsaWMgbWVzc2FnZTogRW1haWwgPSB7bmFtZTogJycsIGVtYWlsOiAnJywgbWVzc2FnZTogJyd9O1xuIFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2UucG9zdEVtYWlsKHRoaXMubWVzc2FnZSkuc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB0aGlzLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5oYW5kbGVSZXNwb25zZShlcnJvcilcbiAgICAgICk7XG4gICAgfVxuIFxuICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICAgICBjb25zb2xlLmxvZyhgbXNnIGlzOiB7cmVzcG9uc2Uuc3RhdHVzfWApO1xuIFxuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09J3N1Y2Nlc3MnKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0ge25hbWU6ICcnLCBlbWFpbDogJycsIG1lc3NhZ2U6ICcnfTtcbiAgICAgICAgYWxlcnQoJ0RhbmtlIGbDvHIgZGVpbmUgTmFjaHJpY2h0Jyk7XG4gICAgICB9XG4gXG4gICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0nZXJyb3InKXtcbiAgICAgICAgYWxlcnQoJ0xlaWRlciBrb25udGVuIHdpciBJaHJlIE5hY2hyaWNodCBuaWNodCB2ZXJzZW5kZW4uIFByb2JpZXIgU2llIGVzIG5vY2htYWxzIG9kZXIgcnVmZW4gU2llIGFuLiBEYW5rZScpO1xuICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
