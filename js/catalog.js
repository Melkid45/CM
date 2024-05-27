function Render() {
    let e = 0;
    document.querySelectorAll(".catalog__body-box-item").forEach((t) => {
      t.getAttribute("data-weight") == localStorage.getItem("btn__wight") &&
      t.getAttribute("data-type") == localStorage.getItem("btn__type")
        ? (t.classList.remove("none"), e++)
        : t.classList.add("none"),
        0 == e
          ? $(".non__card").removeClass("none")
          : $(".non__card").addClass("none");
    });
  }
  $(".catalog__body-buttons-wight-item").on("click", function (e) {
    localStorage.setItem("btn__wight", $(this).attr("data-weight")),
      $(this).addClass("active"),
      $(".catalog__body-buttons-wight-item").not(this).removeClass("active"),
      Render();
  }),
    $(".catalog__body-buttons-type-item").on("click", function (e) {
      localStorage.setItem("btn__type", $(this).attr("data-type")),
        $(this).addClass("active"),
        $(".catalog__body-buttons-type-item").not(this).removeClass("active"),
        localStorage.getItem("btn__type"),
        "Погрузчики повышенной проходимости" == $(this).attr("data-type")
          ? ($(".catalog__body-buttons-wight").addClass("none"),
            localStorage.setItem("btn__wight", "3,0-3,5т"))
          : $(".catalog__body-buttons-wight").removeClass("none"),
        "Электропогрузчики" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Под брендом HELI на текущий момент в России представлены следующие ассортиментные линейки:Новейшая серия  H3, серия GREEN , GREEN 2, GREEN 3, серия H2000"
            ))
          : "Погрузчики с боковой загрузкой" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Боковые погрузчики Сайдлоудер (Sideloaders) :  погрузчики с боковой загрузкой, способны перемещать негабаритный груз быстро и безопасно, даже в условиях ограниченного пространства.  Данное оборудование особенно необходимо на складах и предприятиях по обработке лесоматериалов, деревянных панелей , труб, пластика и ПВХ."
            ))
          : "Платформенные тележки и тягачи" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Грузовые платформенные электрические тележки и дизельные/электрические тягачи применяются для:буксировки или перевозки паллетных и контейнерных тележек на производстве, складах,, на железнодорожных вокзалах и в морских портах. "
            ))
          : "Автопогрузчики" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Под брендом HELI на текущий момент в России представлены следующие ассортиментные линейки:Новейшая серия  H3, серия GREEN , GREEN 2, GREEN 3, серия H2000 Кроме того погрузчики могут быть укомплектованы дизельными двигателями японской или китайской сборки."
            ))
          : "Погрузчики повышенной проходимости" ==
            localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Погрузчики повышенной проходимости HELI грузоподъемностью 3-3,5 тонны созданы  для работы на открытых площадках с неровным покрытием. У данных погрузчиков усиленная рама, увеличенный клиренс, высокая посадка оператора, шины увеличенного размера с глубоким протектором, имеется функция блокировки дифференциала колес.Одним из достоинств таких погрузчиков является его универсальность. Вы получите машину, способную работать как на складе или на ровной открытой площадке, и на пересечённой местности.Широко применяется в строительстве, сельском хозяйстве."
            ))
          : ($(".text__desc").text(""), $(".text__desc").addClass("none")),
        Render();
    }),
    $(window).on("load", function (e) {
      document
        .querySelectorAll(".catalog__body-buttons-wight-item")
        .forEach((e) => {
          e.classList.contains("active") &&
            localStorage.setItem("btn__wight", e.getAttribute("data-weight"));
        }),
        document
          .querySelectorAll(".catalog__body-buttons-type-item")
          .forEach((e) => {
            e.classList.contains("active") &&
              localStorage.setItem("btn__type", e.getAttribute("data-type"));
          }),
        "Электропогрузчики" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Под брендом HELI на текущий момент в России представлены следующие ассортиментные линейки:Новейшая серия  H3, серия GREEN , GREEN 2, GREEN 3, серия H2000"
            ))
          : "Погрузчики с боковой загрузкой" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Боковые погрузчики Сайдлоудер (Sideloaders) :  погрузчики с боковой загрузкой, способны перемещать негабаритный груз быстро и безопасно, даже в условиях ограниченного пространства.  Данное оборудование особенно необходимо на складах и предприятиях по обработке лесоматериалов, деревянных панелей , труб, пластика и ПВХ."
            ))
          : "Платформенные тележки и тягачи" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Грузовые платформенные электрические тележки и дизельные/электрические тягачи применяются для:буксировки или перевозки паллетных и контейнерных тележек на производстве, складах,, на железнодорожных вокзалах и в морских портах. "
            ))
          : "Автопогрузчики" == localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Под брендом HELI на текущий момент в России представлены следующие ассортиментные линейки:Новейшая серия  H3, серия GREEN , GREEN 2, GREEN 3, серия H2000 Кроме того погрузчики могут быть укомплектованы дизельными двигателями японской или китайской сборки."
            ))
          : "Погрузчики повышенной проходимости" ==
            localStorage.getItem("btn__type")
          ? ($(".text__desc").removeClass("none"),
            $(".text__desc").text(
              "Погрузчики повышенной проходимости HELI грузоподъемностью 3-3,5 тонны созданы  для работы на открытых площадках с неровным покрытием. У данных погрузчиков усиленная рама, увеличенный клиренс, высокая посадка оператора, шины увеличенного размера с глубоким протектором, имеется функция блокировки дифференциала колес.Одним из достоинств таких погрузчиков является его универсальность. Вы получите машину, способную работать как на складе или на ровной открытой площадке, и на пересечённой местности.Широко применяется в строительстве, сельском хозяйстве."
            ))
          : ($(".text__desc").text(""), $(".text__desc").addClass("none")),
        Render();
    })