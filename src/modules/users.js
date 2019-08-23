import User from '../database/models/user';
import Messages from '../database/models/messages';

export default class UsersController {
    static async getAllUsers(req, res){
        try {
            const allUsers = await User.find();
            return res.status(200).json({
                message: 'all users fetched successfully',
                allUsers,
            });

        } catch (err) {
            console.error(err);
        }
    }
    static async deleteUser(req, res){
        try {
            const userPhoneNumber = req.body.userPhoneNumber;
            const deletedUser = await User.deleteMany({phoneNumber: userPhoneNumber}, (err, deletedUser) => {
                if(err){
                    console.error(err);
                }
            });
            const deletedReceivedMessages = await Messages.deleteMany({recipientNumberNumber: userPhoneNumber}, (err, deletedSentMessages) => {
                if(err){
                    console.error(err);
                }
            });
            const deletedSentMessages = await Messages.deleteMany({senderNumber: userPhoneNumber}, (err, deletedSentMessages) => {
                if(err){
                    console.error(err);
                }
            });

            return res.status(404).json({
                message: 'user and messages deleted successfully',
                deletedUser,
                deletedReceivedMessages,
                deletedSentMessages,
            });

        } catch (error) {
            console.log(error);
        }
        }
}