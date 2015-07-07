function getElementByClassName(class_name){
      var classElements=[];
      var allElements=document.getElementsByTagName("*");
      for (var i = 0; i < allElements.length; i++) {
        var class_list=allElements[i].className.split(" ");
        for(var j=0;j<class_list.length;j++){
          if (class_list[j]==class_name) {
            classElements[classElements.length]=allElements[i];
          };
        }
      } 
      return classElements;
      };
      getElementByClassName("glyphicon").onmouseover=function(){
        this.style.display="inline-block";
      }
    function ele_remove(courseId){
      var a=document.getElementById(courseId);
      var x=document.createElement("div");
      while(a.className!="col-sm-4 col-md-3"){
        a=a.parentNode;
      }
      a.parentNode.removeChild(a);
    }
    function show_mask(){
      document.getElementById("popWindow").style.display="block";
      document.getElementById("update_text").style.display="block";
    }
    function hide_mask(){
      document.getElementById("popWindow").style.display="none";
      document.getElementById("update_text").style.display="none";
    }
    