angular.module('flashnoteApp.view.home', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('construct-menu',
            {
                templateUrl: 'view.home/home-construct.html',
                controller: 'HomeCtrl',
                controllerAs: 'controller'
            });
    }])

    .controller('HomeCtrl', function HomeController($state, $http) {
        var self = this;

        self.user = "Student";


        self.myrecentdecks = [];
        self.myrecentdecks.push({ title : 'Sample Deck', deck_id : 11, date_modified: new Date().toISOString()})
        self.myrecentdecks.push({ title : 'Sample Deck2', deck_id : 13, date_modified: "Yesterday"})
        self.myrecentdecks.push({ title : 'Sample Deck3', deck_id : 16, date_modified: "7 days ago"})


        self.notifications = [];
        self.notifications.push({from : {id : 1, name : "SYSTEM"}, type : "error", message : "Unable to process request"});
        self.notifications.push({from : {id : 4, name : "Other"}, type : "info", message : "Has made an annotation on one of your flashcards."});
        self.notifications.push({from : {id : 7, name : "Classmate"}, type : "success", message : "Has accepted your annotation request"});


        self.msg_class = function(type) {
            if(type === 'error') {
                return 'label label-danger';
            }

            if(type === 'success') {
                return 'label label-success';
            }
            return 'label label-info';
        }

    });
