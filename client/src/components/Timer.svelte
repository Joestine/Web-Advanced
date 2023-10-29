<script>
    import { onDestroy, onMount } from 'svelte';
  
    export let timeLeft;
    let intervalId;
  
    function formatTimeLeft(timeLeft) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    function updateTimeLeft() {
        timeLeft -= 1000;
        if (timeLeft <= 0) {
            stopTimer();
        }
    }
  
    function startTimer() {
        intervalId = setInterval(updateTimeLeft, 1000);
    }
  
    function stopTimer() {
      clearInterval(intervalId);
    }

    onMount(startTimer);
  
    onDestroy(stopTimer);
  </script>
  
  <p><span class="font-bold">Time Left:</span> {formatTimeLeft(timeLeft)}</p>