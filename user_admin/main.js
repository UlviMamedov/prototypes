function User(username, email) {
    this.username = username;
    this.email = email;
  }
  
  User.prototype.login = function(system) {
    if (system.addUser(this)) {
      console.log(`${this.username} logged in.`);
    }
  };
  
  User.prototype.logout = function(system) {
    system.removeUser(this);
    console.log(`${this.username} logged out.`);
  };
  
  function System() {
    this.users = {};
  }
  
  System.prototype.addUser = function(user) {
    if (!this.users[user.username]) {
      this.users[user.username] = user;
      return true;
    }
    return false;
  };
  
  System.prototype.removeUser = function(user) {
    delete this.users[user.username];
  };
  
  System.prototype.getOnlineUsers = function() {
    return Object.keys(this.users);
  };
  
  System.prototype.getUser = function(id) {
    return this.users[id];
  };
  
  function Admin(username, email) {
    User.call(this, username, email);
  }
  
  Admin.prototype = Object.create(User.prototype);
  Admin.prototype.constructor = Admin;
  
  Admin.prototype.removeUser = function(system, id) {
    if (id !== this.username && system.getUser(id)) {
      system.removeUser(system.getUser(id));
      console.log(`Admin ${this.username} removed user with id: ${id}`);
    } else {
      console.log("Admin cannot remove themselves or non-existing user.");
    }
  };
  
  
  const system = new System();
  const user1 = new User("user1", "user1@example.com");
  const user2 = new User("user2", "user2@example.com");
  const admin = new Admin("admin", "admin@example.com");
  
  user1.login(system);
  user2.login(system);
  
  console.log("Online users:", system.getOnlineUsers());
  
  admin.login(system);
  admin.removeUser(system, "user2");
  
  user1.logout(system);
  user2.logout(system);
  
  console.log("Online users:", system.getOnlineUsers());