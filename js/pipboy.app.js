$(document).ready(function() {
  var weapons = [{
      "name": ".44_Pistol",
      "Damage": 48,
      "Firerate": 6,
      "Range": 119,
      "Accuracy": 66,
      "Weight": 4.2,
      "Value": 99
    },
    {
      "name": "10mm_Pistol",
      "Damage": 18,
      "Firerate": 46,
      "Range": 119,
      "Accuracy": 61,
      "Weight": 4.2,
      "Value": 53
    },
    {
      "name": "assult_rifle",
      "Damage": 30,
      "Firerate": 40,
      "Range": 119,
      "Accuracy": 72,
      "Weight": 13.1,
      "Value": 144
    }
  ];

  $('.item-list a').on('click', function(e) {
    $('.item-list a').removeClass('active');
    $(e.currentTarget).addClass('active');
  });

  $('.item-list a').on('mouseenter', function(e) {
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);

    for (item in weapons) {
      if (weapons[item].name == current_item) {
        console.log(weapons[item]);

        var container = $('.item-stats');
        container.find('.damage').html(weapons[item].Damage);
        container.find('.fire_rate').html(weapons[item].Firerate);
        container.find('.accuracy').html(weapons[item].Accuracy);
        container.find('.range').html(weapons[item].Range);
        container.find('.weight').html(weapons[item].Weight);
        container.find('.value').html(weapons[item].Value);
      }
    }
  });

});
