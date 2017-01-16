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
var http_2 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var ContactService = (function () {
    function ContactService(_http) {
        this._http = _http;
        this._contactUrl = 'app/contact/email.php';
    }
    ContactService.prototype.postEmail = function (newMail) {
        var body = "name=" + newMail.name + "&email=" + newMail.email + "&message=" + newMail.message;
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(this._http.post(this._contactUrl, body, options).map(function (res) { return res.json(); })
            .catch(this.handleError));
        return this._http.post(this._contactUrl, body, options).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error('Error in retrieving json: ' + error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxtQkFBdUMsU0FBUyxDQUFDLENBQUE7QUFLakQ7SUFDRSx3QkFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFFeEIsZ0JBQVcsR0FBRyx1QkFBdUIsQ0FBQztJQUZYLENBQUM7SUFJcEMsa0NBQVMsR0FBVCxVQUFVLE9BQWM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsVUFBUSxPQUFPLENBQUMsSUFBSSxlQUFVLE9BQU8sQ0FBQyxLQUFLLGlCQUFZLE9BQU8sQ0FBQyxPQUFTLENBQUM7UUFDcEYsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFLLE9BQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFuQixDQUFtQixDQUFDO2FBQ3pFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFLLE9BQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFuQixDQUFtQixDQUFDO2FBQ3ZFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVPLG9DQUFXLEdBQW5CLFVBQXFCLEtBQWU7UUFDbEMsb0ZBQW9GO1FBQ3BGLDRDQUE0QztRQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXJCSDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBc0JiLHFCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxzQkFBYyxpQkFxQjFCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9jb250YWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge0hlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9ICAgICAgICAgICAgICAgZnJvbSAncnhqcy9SeCc7XG4vL2ltcG9ydCAncnhqcy9SeCdcbmltcG9ydCB7RW1haWx9ICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2ludGVyZmFjZXMvRW1haWwnO1xuIFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG4gXG4gIHByaXZhdGUgX2NvbnRhY3RVcmwgPSAnYXBwL2NvbnRhY3QvZW1haWwucGhwJztcbiBcbiAgcG9zdEVtYWlsKG5ld01haWw6IEVtYWlsKTogT2JzZXJ2YWJsZTxzdHJpbmc+e1xuICAgIGxldCBib2R5ID0gYG5hbWU9JHtuZXdNYWlsLm5hbWV9JmVtYWlsPSR7bmV3TWFpbC5lbWFpbH0mbWVzc2FnZT0ke25ld01haWwubWVzc2FnZX1gO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuIGNvbnNvbGUubG9nKHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb250YWN0VXJsLCBib2R5LCBvcHRpb25zKS5tYXAocmVzID0+ICA8c3RyaW5nPiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcikpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29udGFjdFVybCwgYm9keSwgb3B0aW9ucykubWFwKHJlcyA9PiAgPHN0cmluZz4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG4gIH1cbiBcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgLy8gaW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWF5IHNlbmQgdGhlIHNlcnZlciB0byBzb21lIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgLy8gaW5zdGVhZCBvZiBqdXN0IGxvZ2dpbmcgaXQgdG8gdGhlIGNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiByZXRyaWV2aW5nIGpzb246ICcgKyBlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
