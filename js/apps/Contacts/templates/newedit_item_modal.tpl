<div class='frame'>
    <div class="modal-header">
        <button type="button" class="close js-close" data-dismiss='modal'>&times;</button>
        <h3><%= title %></h3>
    </div>
    <form>

            <label for="contact-firstName">First name:</label>
            <input id="contact-firstName" name="firstName" type="text" value="<%= firstName %>"/>

        <div class="control-group">
            <label for="contact-lastName" class="control-label">Last name:</label>
            <input id="contact-lastName" name="lastName" type="text" value="<%= lastName %>"/>
        </div>
        <div class="control-group">
            <label for="contact-phoneNumber" class="control-label">Phone number:</label>
            <input id="contact-phoneNumber" name="phoneNumber" type="text" value="<%= phoneNumber %>"/>
        </div>
        <div class="modal-footer">
            <button class="btn js-close">Close</button>
            <button class="btn btn-primary js-submit">Save changes</button>
        </div>
    </form>
</div>
