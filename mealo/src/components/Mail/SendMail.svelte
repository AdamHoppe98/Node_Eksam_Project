<script>

</script>



<form action="/api/mails" method="POST">
    <fieldset>
        <label for="subject">Topic</label>
        <input id="subject" name="subject" placeholder="subject..." value="i need meals">

        <label for="email">to Email</label>
        <input id="email" name="email" placeholder="send to email..." type="email" required value="bingbui0@gmail.com">

        <label for="email">from Email</label>
        <input id="email" name="from" placeholder="send email from..." type="email" required value="bingbui0@gmail.com">

        <label for="text">Message</label>
        <textarea id="text" name="text" placeholder="message..." rows="15" cols="60">i hate plants</textarea>

        <button>Contact</button>
    </fieldset>
</form>



