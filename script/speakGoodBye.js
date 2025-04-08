
(function(window){
    var goodbye="Goodbye";
    var byespeaker={};
    byespeaker.saygoodbye=function(names){
        console.log(goodbye+" "+names);
    }
    window.byespeaker=byespeaker;
})(window);
