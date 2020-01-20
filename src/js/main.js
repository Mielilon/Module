//= jquery.min.js

function initSelect() {
  $(".text-input--select").each(function() {
    if ($(document).height() - $(this).offset().top < 400)
      $(this).addClass("open-top");
  });

  $(".text-input--select").click(function(event) {
    let wrapper = $(this);
    let list = wrapper.find(".select-list, .select-list .scrollbar-inner");
    let isActive = list.hasClass("active");

    if ($(document).height() - $(this).offset().top < 400)
      $(this).addClass("open-top");

    $(".text-input--select").removeClass("active");
    $(".text-input--select")
      .children(".select-list")
      .removeClass("active");

    if (isActive) {
      wrapper.removeClass("active");
      list.removeClass("active");
    } else {
      wrapper.addClass("active");
      list.addClass("active");

      let firstActiveItem = list.find(".select-list__item.active")[0];

      list
        .find(".scroll-content")
        .scrollTop(firstActiveItem && firstActiveItem.offsetTop);
    }

    event.stopImmediatePropagation();

    $(document).click(function() {
      list.removeClass("active");
      wrapper.removeClass("active");
    });
  });

  $(".text-input--select:not(.multiple) .select-list .select-list__item").click(
    function(event) {
      // Здесь и в multiple - содержимое строки list__item будет
      // добавляться в input как значение
      let item = $(this);

      item.siblings().removeClass("active");
      item.addClass("active");
      item
        .closest(".text-input")
        .children("input")
        .val(item.text());
    }
  );
}

$(document).ready(function() {
  initSelect();
});
