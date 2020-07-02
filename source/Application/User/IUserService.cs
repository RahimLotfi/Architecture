using Architecture.Model;
using DotNetCore.Objects;
using DotNetCore.Results;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Architecture.Application
{
    public interface IUserService
    {
        Task<IResult<long>> AddAsync(UserModel model);

        Task<IResult> DeleteAsync(long id);

        Task<UserModel> GetAsync(long id);

        Task InactivateAsync(long id);

        Task<Grid<UserModel>> ListAsync(GridParameters parameters);

        Task<IEnumerable<UserModel>> ListAsync();

        Task<IResult> UpdateAsync(UserModel model);
    }
}
