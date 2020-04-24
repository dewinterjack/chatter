using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.ComponentModel;
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

        public override async Task OnConnectedAsync()
        {
            UserHandler.ConnectionIds.Add(Context.ConnectionId);
            await Clients.Caller.SendAsync("ConnectionCountChanged", UserHandler.ConnectionIds.Count);
            await base.OnConnectedAsync();
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
        public static ObservableCollection<string> ConnectionIds = new ObservableCollection<string>();
    }
}
