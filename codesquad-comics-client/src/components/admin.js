import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
const Admin = () => {
    return (
        <div>
            <Header />
            <main> 
                <h1>ADMIN PAGE</h1>        
                <button type="submit">ADD NEW COMIC</button>   

                <table>
                    <thead>
                        <tr>
                            <th>COMIC TITLE</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td>Batman: The Dark Knight Returns</td>                                         
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>                
                            <td>Black Panther: A Nation Under Our Feet Book 1</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>Fun Home: A Family Tragicomic</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>           
                        </tr>
                        <tr>
                            <td>Hunter X Hunter Vol. 1</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>Lumberjanes Vol. 1</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>March: Book One</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>One Piece, Vol, 1: Romance Dawn</td>                                    
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>Parable of the Sower</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>          
                        </tr>
                        <tr>
                            <td>Queer: A Graphic History</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>Watchmen</td>
                            <td><button type="submit" name="action" value="edit">EDIT</button></td>
                            <td><button type="submit" name="action" value="edit">DELETE</button></td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <Footer />
        </div>
    );
};

export default Admin;
