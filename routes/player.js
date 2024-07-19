module.exports = {
    addPlayerPage: (req, res) => {
        res.render('add-player.ejs', {
            title: "Welcome to Football | Add a New Player",
            message: ''
        });
    },
    addPlayer: (req, res) => {
        let message = "";
        let { first_name, last_name, position, number, username } = req.body;

        let usernameQuery = "SELECT * FROM players WHERE user_name = ?";

        db.query(usernameQuery, [username], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            if (result.length > 0) {
                message = "Username already exists";
                res.render('add-player.ejs', {
                    message,
                    title: "Welcome to Socka | Add a New Player"
                });
            } else {
                let query = "INSERT INTO players (first_name, last_name, position, number, user_name) VALUES (?, ?, ?, ?, ?)";
                db.query(query, [first_name, last_name, position, number, username], (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            }
        });
    },
    editPlayerPage: (req, res) => {
        let playerId = req.params.id;
        let query = "SELECT * FROM players WHERE id = ?";

        db.query(query, [playerId], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            res.render('edit-player.ejs', {
                title: "Edit Player",
                player: result[0],
                message: ''
            });
        });
    },
    editPlayer: (req, res) => {
        let playerId = req.params.id;
        let { first_name, last_name, position, number } = req.body;

        let query = "UPDATE players SET first_name = ?, last_name = ?, position = ?, number = ? WHERE id = ?";
        db.query(query, [first_name, last_name, position, number, playerId], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deletePlayer: (req, res) => {
        let playerId = req.params.id;
        let deleteUserQuery = "DELETE FROM players WHERE id = ?";

        db.query(deleteUserQuery, [playerId], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    }
}
