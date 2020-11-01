			function calcul_moyenne()
			{


			somme = 0;		

			var List = document.getElementsByName("radio1");
			var List_value = "";
			
			var s = 0;

			for(var i = 0; i < List.length; i++)
			{
    			if(List[i].checked)
    			{
        			List_value = List[i].value;
        			var parse_number = parseFloat(List_value);	
        			s += parse_number;
        		}
			}

			var List1 = document.getElementsByName("radio2");
			var List_value1 = "";
			
			var s1 = 0;

			for(var i = 0; i < List1.length; i++)
			{
    			if(List1[i].checked)
    			{
        			List_value1 = List1[i].value;
        			var parse_number1 = parseFloat(List_value1);	
        			s1 += parse_number1;
        		}
			}


			var List2 = document.getElementsByName("radio3");
			var List_value2 = "";
			
			var s2 = 0;

			for(var i = 0; i < List2.length; i++)
			{
    			if(List2[i].checked)
    			{
        			List_value2 = List2[i].value;
        			var parse_number2 = parseFloat(List_value2);	
        			s2 += parse_number2;
        		}
			}

			somme = s + s1 + s2;

			var moyenne = somme/3;	

			var arrondi = moyenne*100;
			arrondi = Math.round(arrondi);
			arrondi = arrondi/100;

			document.write("La moyenne de votre note de satisfaction est : "+arrondi+"/10");
			}

			page1 = document.getElementById("page1");
			page2 = document.getElementById("page2");

			suivant = document.getElementById("suivant");
			precedant = document.getElementById("precedant");

			document.getElementById("suivant").addEventListener("click", function(e){
    			page1.style.display = "none";
    			page2.style.display = "block";

    			suivant.style.display = "none";
    			precedant.style.display = "inline-block";
			});

			document.getElementById("precedant").addEventListener("click", function(e){
    			page1.style.display = "block";
    			page2.style.display = "none";

    			suivant.style.display = "inline-block";
    			precedant.style.display = "none";
			});
			