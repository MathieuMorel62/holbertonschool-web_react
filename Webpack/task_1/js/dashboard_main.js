import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id=\'count\'></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  function updateCounter() {
    const count = parseInt($('#count').text()) || 0;
    $('#count').text(`${++count} clicks on the button`);
  }

  $('startButton').on('click', _.debounce(updateCounter, 500));
});
