const { mockReq, mockRes } = require('./../interceptor')
const Ticket = require('./../../models/ticket.model')
const User = require('./../../models/user.model')
const { createTicket } = require('./../../controllers/ticket.controller')


const ticketObject = {
    title: "button not working",
    ticketPriority: 1,
    description: "Login Button not working ",
    status: "OPEN",
    reporter: "omkar",
}

const user =
{
    ticketsAssigned: [], ticketsCreated: [], _id: '123456', userId: "Engineer_new",
    save: jest.fn().mockImplementation(() => Promise.resolve("ok"))
}

const ticket = {
    _id: '12345'
}

const err = "Title is not passed"


describe('Create Ticket', () => {
    it('should create Ticket', async () => {
        let spyFindOne = jest.spyOn(User, "findOne").mockImplementation(() => Promise.resolve(user))


        let spyCreateTicket = jest.spyOn(Ticket, "create").mockImplementation(() => Promise.resolve(ticket))


        let req = mockReq()
        let res = mockRes()
        req.body = ticketObject
        req.userId = "engineer_omkar"

        await createTicket(req, res)

        expect(spyFindOne).toHaveBeenCalled()
        expect(spyCreateTicket).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith({ message: "Ticket Created Successfully", data: ticket })

    });

    it('should fail To create ticket', async () => {
        const spyFindOne = jest.spyOn(User, 'findOne').mockImplementation(() => Promise.resolve(user))
        const spyCreate = jest.spyOn(Ticket, 'create').mockImplementation(() => Promise.reject(err))

        let req = mockReq()
        let res = mockRes()

        await createTicket(req, res)

        expect(spyFindOne).toHaveBeenCalled()
        expect(spyCreate).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({
            message: "internal Error",
            err
        })
    })


})