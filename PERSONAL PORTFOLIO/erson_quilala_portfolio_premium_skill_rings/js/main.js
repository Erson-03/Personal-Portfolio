/* =========================================================
   ERSON QUILALA PORTFOLIO
   jQuery interactions
========================================================= */

$(document).ready(function () {


  /* =====================================================
     SETTINGS
  ===================================================== */

  const portfolioEmail = "your.email@example.com";


  const accentPresets = {

    blue: {
      main: "#5B8CFF",
      secondary: "#875CFF",
      soft: "rgba(91, 140, 255, 0.10)",
      border: "rgba(91, 140, 255, 0.28)"
    },

    purple: {
      main: "#956FFF",
      secondary: "#6C4BFF",
      soft: "rgba(149, 111, 255, 0.10)",
      border: "rgba(149, 111, 255, 0.28)"
    },

    cyan: {
      main: "#4DC8FF",
      secondary: "#5F85FF",
      soft: "rgba(77, 200, 255, 0.10)",
      border: "rgba(77, 200, 255, 0.28)"
    }

  };


  /* =====================================================
     CURRENT YEAR
  ===================================================== */

  $("#currentYear").text(
    new Date().getFullYear()
  );


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  $("#menuToggle").on("click", function () {

    $(this).toggleClass("active");

    $("#navMenu").toggleClass("open");

    const isOpen =
      $("#navMenu").hasClass("open");

    $(this).attr(
      "aria-expanded",
      isOpen
    );

    $("body").toggleClass(
      "menu-open",
      isOpen
    );

  });


  $("#navMenu a").on("click", function () {

    $("#navMenu").removeClass("open");

    $("#menuToggle")
      .removeClass("active")
      .attr("aria-expanded", "false");

    $("body").removeClass("menu-open");

  });


  $(document).on("click", function (event) {

    if (
      !$(event.target).closest(
        "#navMenu, #menuToggle"
      ).length
    ) {

      $("#navMenu").removeClass("open");

      $("#menuToggle")
        .removeClass("active")
        .attr("aria-expanded", "false");

      $("body").removeClass("menu-open");

    }

  });


  /* =====================================================
     SMOOTH SCROLL
  ===================================================== */

  $('a[href^="#"]').on("click", function (event) {

    const target =
      $(this).attr("href");

    if (
      target !== "#" &&
      $(target).length
    ) {

      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop:
            $(target).offset().top - 66
        },
        560
      );

    }

  });


  /* =====================================================
     ROLE ROTATION
  ===================================================== */

  const roles = [
    "FRONT-END DEVELOPER",
    "RESPONSIVE WEB DEVELOPER",
    "UI-FOCUSED DEVELOPER",
    "JAVASCRIPT LEARNER"
  ];

  let roleIndex = 0;

  if (
    !window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    setInterval(function () {

      roleIndex =
        (roleIndex + 1) %
        roles.length;

      $("#changingRole").fadeOut(
        150,
        function () {

          $(this)
            .text(roles[roleIndex])
            .fadeIn(190);

        }
      );

    }, 2600);

  }


  /* =====================================================
     SCROLL EFFECTS
  ===================================================== */

  function updateScrollEffects() {

    const scrollTop =
      $(window).scrollTop();

    if (scrollTop > 18) {
      $("#siteHeader").addClass("scrolled");
    }
    else {
      $("#siteHeader").removeClass("scrolled");
    }

    if (scrollTop > 550) {
      $("#backToTop").addClass("show");
    }
    else {
      $("#backToTop").removeClass("show");
    }

    const maxScroll =
      $(document).height() -
      $(window).height();

    const progress =
      maxScroll > 0
        ? (scrollTop / maxScroll) * 100
        : 0;

    $("#scrollProgress").css(
      "width",
      progress + "%"
    );

  }


  /* =====================================================
     ACTIVE NAVIGATION
  ===================================================== */

  function updateNavigation() {

    const position =
      $(window).scrollTop() + 150;

    $("main section[id]").each(function () {

      const top =
        $(this).offset().top;

      const bottom =
        top + $(this).outerHeight();

      if (
        position >= top &&
        position < bottom
      ) {

        const id =
          $(this).attr("id");

        $(".nav-link").removeClass("active");

        $(
          `.nav-link[href="#${id}"]`
        ).addClass("active");

      }

    });

  }


  /* =====================================================
     REVEAL ON SCROLL
  ===================================================== */

  function revealElements() {

    const viewportBottom =
      $(window).scrollTop() +
      $(window).height();

    $(".reveal").each(function () {

      if (
        $(this).offset().top <
        viewportBottom - 60
      ) {

        $(this).addClass("show");

      }

    });

  }


  $(window).on("scroll", function () {

    updateScrollEffects();
    updateNavigation();
    revealElements();
    animateToolBars();

  });


  updateScrollEffects();
  updateNavigation();
  revealElements();
  animateToolBars();


  /* =====================================================
     CURSOR GLOW
  ===================================================== */

  if (
    window.matchMedia(
      "(hover: hover)"
    ).matches
  ) {

    $(document).on("mousemove", function (event) {

      $("#cursorGlow").css({
        left: event.clientX + "px",
        top: event.clientY + "px",
        opacity: 1
      });

    });

    $(document).on("mouseleave", function () {

      $("#cursorGlow").css(
        "opacity",
        0
      );

    });

  }


  /* =====================================================
     HERO PARALLAX
  ===================================================== */

  if (
    window.matchMedia(
      "(hover: hover)"
    ).matches &&
    !window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    $("#heroVisual").on("mousemove", function (event) {

      const rect =
        this.getBoundingClientRect();

      const x =
        (
          (
            event.clientX -
            rect.left
          ) /
          rect.width -
          0.5
        ) * 7;

      const y =
        (
          (
            event.clientY -
            rect.top
          ) /
          rect.height -
          0.5
        ) * 7;

      $(".hero-layer").each(function (index) {

        const depth =
          (index + 1) * 0.45;

        $(this).css(
          "transform",
          `translate(${x * depth}px, ${y * depth}px)`
        );

      });

    });


    $("#heroVisual").on("mouseleave", function () {

      $(".hero-layer").css(
        "transform",
        "translate(0, 0)"
      );

    });

  }


  /* =====================================================
     INTERACTIVE PLAYGROUND
  ===================================================== */

  function setInteractionLog(message) {

    $("#interactionLog")
      .stop(true, true)
      .hide()
      .text(message)
      .fadeIn(160);

  }


  $(".play-button").on("click", function () {

    const action =
      $(this).data("action");

    if (action === "pulse") {

      $(".play-panel")
        .removeClass("is-pulsing");

      void document
        .querySelector(".play-panel")
        .offsetWidth;

      $(".play-panel")
        .addClass("is-pulsing");

      setInteractionLog(
        "UI pulse executed with jQuery class controls."
      );

    }


    if (action === "highlight") {

      $(".play-panel")
        .toggleClass("is-highlighted");

      setInteractionLog(
        $(".play-panel").hasClass("is-highlighted")
          ? "Interactive panels highlighted."
          : "Panel highlight removed."
      );

    }


    if (action === "reset") {

      $(".play-panel")
        .removeClass(
          "is-highlighted is-pulsing"
        );

      $("#playInput").val("");

      $("#liveOutput").text(
        "waiting for input..."
      );

      $("#focusSelect").val("");

      $("#focusResult").text(
        "No focus selected."
      );

      $(".accent-dot")
        .removeClass("active")
        .filter('[data-accent="blue"]')
        .addClass("active");

      applyAccent("blue");

      $("#developerNote").stop(true, true).slideUp(160);

      $("#toggleDeveloperNote").text(
        "SHOW NOTE"
      );

      setInteractionLog(
        "Playground reset to the default state."
      );

    }

  });


  $("#playInput").on("input", function () {

    const value =
      $(this).val().trim();

    $("#liveOutput").text(
      value
        ? value
        : "waiting for input..."
    );

    setInteractionLog(
      value
        ? `Live input updated: "${value}"`
        : "Input cleared."
    );

  });


  $("#focusSelect").on("change", function () {

    const value =
      $(this).val();

    $("#focusResult").text(
      value
        ? `Current focus: ${value}`
        : "No focus selected."
    );

    setInteractionLog(
      value
        ? `Focus changed to ${value}.`
        : "Focus selection cleared."
    );

  });


  $(".accent-dot").on("click", function () {

    const accent =
      $(this).data("accent");

    $(".accent-dot")
      .removeClass("active");

    $(this).addClass("active");

    applyAccent(accent);

    setInteractionLog(
      `Accent theme changed to ${accent}.`
    );

  });


  function applyAccent(name) {

    const preset =
      accentPresets[name];

    if (!preset) {
      return;
    }

    document
      .documentElement
      .style
      .setProperty(
        "--accent",
        preset.main
      );

    document
      .documentElement
      .style
      .setProperty(
        "--accent-2",
        preset.secondary
      );

    document
      .documentElement
      .style
      .setProperty(
        "--accent-soft",
        preset.soft
      );

    document
      .documentElement
      .style
      .setProperty(
        "--border-strong",
        preset.border
      );

  }


  $("#toggleDeveloperNote").on("click", function () {

    $("#developerNote")
      .stop(true, true)
      .slideToggle(180);

    const willShow =
      !$("#developerNote").is(":visible");

    $(this).text(
      willShow
        ? "HIDE NOTE"
        : "SHOW NOTE"
    );

    setInteractionLog(
      "Developer note toggled."
    );

  });


  /* =====================================================
     PROJECT FILTER
  ===================================================== */

  $(".filter-button").on("click", function () {

    const filter =
      $(this).data("filter");

    $(".filter-button")
      .removeClass("active");

    $(this).addClass("active");

    if (filter === "all") {

      $(".project-card")
        .removeClass("is-hidden")
        .hide()
        .fadeIn(220);

    }
    else {

      $(".project-card").each(function () {

        const category =
          $(this).data("category");

        if (category === filter) {

          $(this)
            .removeClass("is-hidden")
            .hide()
            .fadeIn(220);

        }
        else {

          $(this)
            .addClass("is-hidden");

        }

      });

    }

    updateProjectCount();

  });


  function updateProjectCount() {

    const count =
      $(".project-card:not(.is-hidden)")
        .length;

    $("#projectCount").text(
      `${count} PROJECT${count !== 1 ? "S" : ""}`
    );

  }


  updateProjectCount();


  /* =====================================================
     PROJECT ARROWS
     Scroll the archive horizontally on smaller layouts.
  ===================================================== */

  $("#projectNext").on("click", function () {

    const container =
      $("#projectTrack").parent();

    container.animate(
      {
        scrollLeft:
          container.scrollLeft() + 430
      },
      260
    );

  });


  $("#projectPrev").on("click", function () {

    const container =
      $("#projectTrack").parent();

    container.animate(
      {
        scrollLeft:
          Math.max(
            0,
            container.scrollLeft() - 430
          )
      },
      260
    );

  });




  /* =====================================================
     FRONTEND TOOL CIRCULAR PROGRESS ANIMATION
  ===================================================== */

  function animateToolBars() {

    const section =
      $("#toolFocus");


    if (
      !section.length ||
      section.hasClass("rings-active")
    ) {

      return;

    }


    const viewportBottom =
      $(window).scrollTop() +
      $(window).height();


    const triggerPoint =
      section.offset().top + 90;


    if (
      viewportBottom >
      triggerPoint
    ) {


      section.addClass(
        "rings-active"
      );


      section
        .find(".skill-ring-card")
        .each(function (index) {


          const card =
            $(this);


          const ring =
            card.find(".skill-ring");


          const counter =
            card.find(".skill-counter");


          const target =
            Math.max(
              0,
              Math.min(
                100,
                Number(
                  card.data("percent")
                ) || 0
              )
            );


          const animatedValue = {
            value: 0
          };


          $(
            animatedValue
          ).delay(
            index * 100
          ).animate(
            {
              value:
                target
            },
            {
              duration:
                1200,

              easing:
                "swing",

              step:
                function (now) {


                  const rounded =
                    Math.round(now);


                  const degrees =
                    now * 3.6;


                  counter.text(
                    rounded
                  );


                  ring.css(
                    "--ring-progress",
                    degrees + "deg"
                  );


                },

              complete:
                function () {


                  counter.text(
                    target
                  );


                  ring.css(
                    "--ring-progress",
                    target * 3.6 + "deg"
                  );


                }
            }
          );


        });


    }

  }


  /* =====================================================
     CONTACT FORM
  ===================================================== */

  $("#contactForm").on("submit", function (event) {

    event.preventDefault();

    const name =
      $("#name").val().trim();

    const email =
      $("#email").val().trim();

    const subject =
      $("#subject").val().trim();

    const message =
      $("#message").val().trim();

    let valid = true;

    clearFormErrors();


    if (name.length < 2) {

      showFieldError(
        "#name",
        "Please enter your name."
      );

      valid = false;

    }


    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email)
    ) {

      showFieldError(
        "#email",
        "Enter a valid email address."
      );

      valid = false;

    }


    if (subject.length < 3) {

      showFieldError(
        "#subject",
        "Please enter a subject."
      );

      valid = false;

    }


    if (message.length < 10) {

      showFieldError(
        "#message",
        "Please add a little more detail."
      );

      valid = false;

    }


    if (!valid) {

      $("#formStatus")
        .text(
          "Please check the highlighted fields."
        )
        .css(
          "color",
          "var(--red)"
        );

      return;

    }


    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      message;


    $("#formStatus")
      .text(
        "Opening your email application..."
      )
      .css(
        "color",
        "var(--green)"
      );


    window.location.href =
      `mailto:${portfolioEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

  });


  function showFieldError(
    selector,
    message
  ) {

    $(selector)
      .closest(".form-field")
      .addClass("invalid")
      .find(".field-error")
      .text(message);

  }


  function clearFormErrors() {

    $(".form-field")
      .removeClass("invalid");

    $(".field-error")
      .text("");

  }


  $(".form-field input, .form-field textarea")
    .on("input", function () {

      $(this)
        .closest(".form-field")
        .removeClass("invalid")
        .find(".field-error")
        .text("");

    });


  /* =====================================================
     COPY EMAIL
  ===================================================== */

  $("#copyEmail").on("click", function () {

    const email =
      $(this).data("email");

    if (navigator.clipboard) {

      navigator.clipboard
        .writeText(email)
        .then(function () {

          $("#emailText").text(
            "COPIED!"
          );

          setTimeout(function () {

            $("#emailText").text(
              email
            );

          }, 1400);

        });

    }
    else {

      window.location.href =
        `mailto:${email}`;

    }

  });


  /* =====================================================
     BACK TO TOP
  ===================================================== */

  $("#backToTop").on("click", function () {

    $("html, body").animate(
      {
        scrollTop: 0
      },
      560
    );

  });


});
