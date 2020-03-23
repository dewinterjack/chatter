using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
namespace Chatter.Api.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
