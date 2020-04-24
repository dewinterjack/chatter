using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
namespace Chatter.Api.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message, string timestamp)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message, timestamp);
        }

        public async Task LogIn()
        {
            UserHandler.ConnectionIds.Add(Context.ConnectionId);
            await Clients.Caller.SendAsync("ConnectionCountChanged", UserHandler.ConnectionIds.Count);
        }

        public async Task LogOut()
        {
            UserHandler.ConnectionIds.Remove(Context.ConnectionId);
            await Clients.Caller.SendAsync("ConnectionCountChanged", UserHandler.ConnectionIds.Count);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            UserHandler.ConnectionIds.Remove(Context.ConnectionId);
            await Clients.Others.SendAsync("ConnectionCountChanged", UserHandler.ConnectionIds.Count);
            await base.OnDisconnectedAsync(exception);
        }
    }

    public static class UserHandler
    {
        public static HashSet<string> ConnectionIds = new HashSet<string>();
    }
}
