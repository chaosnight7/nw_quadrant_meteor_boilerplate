# NW Quadrant Web App

This is my proposal for a barebones [Meteor](https://www.meteor.com/) for the NW Quadrant project.  It includes most all of the functionality we talked about — static pages (homepage, about page), individual organization pages, and a login/accounts system.  Still missing is an "admin" role for approving new organization pages before they're made public.

The idea is to let the programming team focus on this project, getting the functionality of the site up to where we want it, while the design team works on [this project](https://github.com/petestreet/nw_quadrant_mockups) in tandem.  Later, the two can merge once we reach a consensus.

### How to run

A version of the app is live at [nw-quadrant.herokuapp.com](https://nw-quadrant.herokuapp.com), where you may click around and add/edit organization pages.  We'll populate it with real data eventually, and then hand over the login info to each organization.  

To run the most up-to-date version on your local machine (note that the online database won't be attached to the local instance, so you'll have to populate your own test data), do the following:
- [Clone this git repository](https://help.github.com/articles/cloning-a-repository/)
- [Install Meteor.js](https://www.meteor.com/install)
- Open your terminal or command prompt, `cd` into the top level of the local repository, type `meteor`, and go to `localhost:3000` in your web browser.
- Refer to Meteor's [documentation](http://docs.meteor.com) (or ask me) if you have trouble.

### How to contribute

- Let me know what your github username is so I can add you as a collaborator.
- After cloning this repository, make a new local branch: `git checkout -b my-branch-name` (make it a descriptive branch name).
- Make any changes you'd like in this new branch.  Test the changes out by saving your code and running meteor locally, per the above instructions.
- When you're ready, push your local branch to github: `git push origin my-branch-name`.
- Click "new pull request" on the repository page, and make sure you're comparing your new branch with `master`.
