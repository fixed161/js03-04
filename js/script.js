var container = document.createElement("div");
container.classList.add("container-fluid");
document.body.insertBefore(container, document.body.childNodes[0]);

var row = document.createElement("div");
row.classList.add("col-md-12");
container.appendChild(row);

var asks = {
    h1: function() {
        var h1 = document.createElement("h1");
        h1.classList.add("text-center");
        h1.innerHTML = "Тест по программированию";
        row.appendChild(h1);
    },

    questions: function() {
        var questions_section = document.createElement("div");
        questions_section.classList.add("questions_section");
        row.appendChild(questions_section);


        for (var i = 1; i <= 3; i++) {
            var question = document.createElement("div");
            question.classList.add("question");
            questions_section.appendChild(question);
            question.innerHTML = "<h3 class=\"question_header\">" + i + ".Вопрос №" + i + "</h3>";


            for (var k = 1; k <= 3; k++) {
                var p = document.createElement("p");
                p.classList.add("question_checkbox");
                question.appendChild(p);

                var label = document.createElement("label");
                label.classList.add("question_label");
                p.appendChild(label);

                label.innerHTML = "<input id=\"first_checkbox\" class=\"question_checkbox\" type=\"checkbox\" />Вариант ответа №" + k + "";
            }
        }
    },

    button: function() {
        var but = document.createElement("button");
        container.classList.add("btn", "btn-default", "btn-lg", "center-block");
        but.setAttribute("type", "button");
        but.innerHTML = "Проверить мои результаты";
        row.appendChild(but);
    }



}

    asks.h1();
    asks.questions();
    asks.button();
