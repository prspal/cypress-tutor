/// <cypress/>
class Groups {
    visit() {
        cy.visit('/mgmt/groups');
    }

    getGroups(){
        return cy.get("#groupListDiv tbody tr");
    }

    btnCreateUser(){
        return cy.contains('Create User');
    }

}
export default Groups;